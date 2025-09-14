export interface ShortUrlOptions {
  longUrl: string;
  deviceLongUrls?: DeviceLongUrls;
  validSince?: string;
  validUntil?: string;
  maxVisits?: number;
  tags?: string[];
  title?: string;
  crawlable?: boolean;
  forwardQuery?: boolean;
  customSlug?: string;
  findIfExists?: boolean;
  domain?: string;
  shortCodeLength?: number;
}

export interface DeviceLongUrls {
  android?: string;
  ios?: string;
  desktop?: string;
}
