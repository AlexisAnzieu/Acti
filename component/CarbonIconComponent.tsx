import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { GiEarthAmerica } from "react-icons/gi";

import { definitions } from "../type/supabase";

const buildTooltipDescription = (carbonLevel: number, t: any) => {
    const table = [
        t("carbonIcon.free"),
        t("carbonIcon.low"),
        t("carbonIcon.medium"),
        t("carbonIcon.high"),
    ];

    return table[carbonLevel];
};

const selectColor = (carbon: number): string => {
    if (carbon === 0) {
        return "green.600";
    } else if (carbon === 3) {
        return "red.600";
    }
    return "";
};

const CarbonIcon = ({
    carbon_footprint,
    fontSize,
}: Pick<definitions["activity"], "carbon_footprint"> & {
    fontSize?: string;
}) => {
    const { t } = useTranslation("common");

    return (
        <Tooltip
            hasArrow
            label={buildTooltipDescription(carbon_footprint, t)}
            bg={selectColor(carbon_footprint)}
        >
            <Box>
                {Array(3)
                    .fill("")
                    .map((_, i) => (
                        <Icon
                            fontSize={fontSize ?? "30px"}
                            key={`${i}_carbon`}
                            as={GiEarthAmerica}
                            color={
                                i < carbon_footprint ? "gray.600" : "gray.200"
                            }
                        />
                    ))}
            </Box>
        </Tooltip>
    );
};

export default CarbonIcon;
