export type WpMedia = {
  alt_text: string;
  author: number;
  caption: {
    rendered: string;
  };
  comment_status: string;
  date: Date;
  date_gmt: Date;
  description: {
    rendered: string;
  };
  guid: {
    rendered: string;
  };
  id: number;
  link: string;
  media_details: {
    width: number;
    height: number;
    file: string;
  };
  media_type: string;
  meta: string[];
  mime_type: string;
  modified: Date;
  modified_gmt: Date;
  ping_status: string;
  post: number;
  slug: string;
  source_url: string;
  status: string;
  template: string;
  title: {
    rendered: string;
  };
  type: string;
};
