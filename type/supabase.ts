/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

type Translations = {
  en: string,
  fr: string
};

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/activity": {
    get: {
      parameters: {
        query: {
          compagny?: parameters["rowFilter.activity.compagny"];
          picture_url?: parameters["rowFilter.activity.picture_url"];
          address?: parameters["rowFilter.activity.address"];
          city?: parameters["rowFilter.activity.city"];
          postal_code?: parameters["rowFilter.activity.postal_code"];
          phone?: parameters["rowFilter.activity.phone"];
          price?: parameters["rowFilter.activity.price"];
          carbon_footprint?: parameters["rowFilter.activity.carbon_footprint"];
          id?: parameters["rowFilter.activity.id"];
          email?: parameters["rowFilter.activity.email"];
          website?: parameters["rowFilter.activity.website"];
          created_at?: parameters["rowFilter.activity.created_at"];
          name?: parameters["rowFilter.activity.name"];
          social_media?: parameters["rowFilter.activity.social_media"];
          description?: parameters["rowFilter.activity.description"];
          location?: parameters["rowFilter.activity.location"];
          review?: parameters["rowFilter.activity.review"];
          seasons?: parameters["rowFilter.activity.seasons"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["activity"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** activity */
          activity?: definitions["activity"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          compagny?: parameters["rowFilter.activity.compagny"];
          picture_url?: parameters["rowFilter.activity.picture_url"];
          address?: parameters["rowFilter.activity.address"];
          city?: parameters["rowFilter.activity.city"];
          postal_code?: parameters["rowFilter.activity.postal_code"];
          phone?: parameters["rowFilter.activity.phone"];
          price?: parameters["rowFilter.activity.price"];
          carbon_footprint?: parameters["rowFilter.activity.carbon_footprint"];
          id?: parameters["rowFilter.activity.id"];
          email?: parameters["rowFilter.activity.email"];
          website?: parameters["rowFilter.activity.website"];
          created_at?: parameters["rowFilter.activity.created_at"];
          name?: parameters["rowFilter.activity.name"];
          social_media?: parameters["rowFilter.activity.social_media"];
          description?: parameters["rowFilter.activity.description"];
          location?: parameters["rowFilter.activity.location"];
          review?: parameters["rowFilter.activity.review"];
          seasons?: parameters["rowFilter.activity.seasons"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          compagny?: parameters["rowFilter.activity.compagny"];
          picture_url?: parameters["rowFilter.activity.picture_url"];
          address?: parameters["rowFilter.activity.address"];
          city?: parameters["rowFilter.activity.city"];
          postal_code?: parameters["rowFilter.activity.postal_code"];
          phone?: parameters["rowFilter.activity.phone"];
          price?: parameters["rowFilter.activity.price"];
          carbon_footprint?: parameters["rowFilter.activity.carbon_footprint"];
          id?: parameters["rowFilter.activity.id"];
          email?: parameters["rowFilter.activity.email"];
          website?: parameters["rowFilter.activity.website"];
          created_at?: parameters["rowFilter.activity.created_at"];
          name?: parameters["rowFilter.activity.name"];
          social_media?: parameters["rowFilter.activity.social_media"];
          description?: parameters["rowFilter.activity.description"];
          location?: parameters["rowFilter.activity.location"];
          review?: parameters["rowFilter.activity.review"];
          seasons?: parameters["rowFilter.activity.seasons"];
        };
        body: {
          /** activity */
          activity?: definitions["activity"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  activity: {
    compagny?: string;
    picture_url?: string;
    address?: string;
    city?: string;
    postal_code?: string;
    phone?: string;
    price?: number;
    carbon_footprint?: number;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    email?: string;
    website?: string;
    created_at?: string;
    name?: Translations;
    social_media: {
      facebook: string,
      youtube: string,
      instagram: string
    };
    description?: Translations;
    location?: string;
    review: Translations;
    seasons: string[];
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** activity */
  "body.activity": definitions["activity"];
  "rowFilter.activity.compagny": string;
  "rowFilter.activity.picture_url": string;
  "rowFilter.activity.address": string;
  "rowFilter.activity.city": string;
  "rowFilter.activity.postal_code": string;
  "rowFilter.activity.phone": string;
  "rowFilter.activity.price": string;
  "rowFilter.activity.carbon_footprint": string;
  "rowFilter.activity.id": string;
  "rowFilter.activity.email": string;
  "rowFilter.activity.website": string;
  "rowFilter.activity.created_at": string;
  "rowFilter.activity.name": string;
  "rowFilter.activity.social_media": string;
  "rowFilter.activity.description": string;
  "rowFilter.activity.location": string;
  "rowFilter.activity.review": string;
  "rowFilter.activity.seasons": string;
}

export interface operations { }

export interface external { }
