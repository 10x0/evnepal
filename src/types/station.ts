export interface IStation {
  name: string;
  city: string;
  province: string;
  address: string;
  telephone: string;
  type: string[];
  latitude: string;
  longitude: string;
  plugs: IPlug[];
  amenities?: string[];
}

interface IPlug {
  plug: string;
  power: string;
  type: string;
}
