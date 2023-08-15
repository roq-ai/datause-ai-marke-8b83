import { ReservationInterface } from 'interfaces/reservation';
import { SalesInterface } from 'interfaces/sales';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  owner_id?: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  sales?: SalesInterface[];
  user?: UserInterface;
  _count?: {
    reservation?: number;
    sales?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  owner_id?: string;
}
