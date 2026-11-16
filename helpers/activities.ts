import { definitions } from "../type/supabase";
import { supabase } from "./supabaseClient";
import { fixActivityName, fixPlaceName } from "./text";

export const normalizeActivity = (activity: any) => {
  if (activity.new_location) {
    activity.location = {
      lat: activity.new_location.coordinates[1],
      lng: activity.new_location.coordinates[0],
    };
  }

  if (activity.new_picture_url) {
    activity.picture_url = `https://acti.anzieu.com/assets/${activity.new_picture_url}`;
  }

  // Some rows were typed in capitals or with trailing spaces: clean them for display.
  if (activity.name && typeof activity.name === "object") {
    activity.name = Object.fromEntries(
      Object.entries(activity.name).map(([locale, value]) => [
        locale,
        typeof value === "string" ? fixActivityName(value) : value,
      ]),
    );
  }
  if (typeof activity.city === "string") {
    activity.city = fixPlaceName(activity.city);
  }
  return activity;
};

// Activities shown on the public site: same rule as the /api/activities list.
export const isPublishable = (activity: definitions["activity"]) =>
  Boolean(activity.picture_url && activity.location && activity.website);

export const fetchPublishedActivities = async (): Promise<
  definitions["activity"][]
> => {
  const { data, error } = await supabase
    .from<definitions["activity"]>("activity")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) {
    return [];
  }
  return data.map(normalizeActivity).filter(isPublishable);
};
