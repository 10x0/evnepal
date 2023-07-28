interface IGeoLocation {
  loaded: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  error?: {
    code: number;
    message: string;
  } | null;
}
