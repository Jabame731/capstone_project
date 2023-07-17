export type ParkingLot = {
  id: number;
  name: string;
  address: string;
  capacity: string;
};

export type ParkingSpaces = {
  id: number;
  space_number: string;
  sensor_value: string;
  lot_number: string;
  availabilty: string;
};

export type ParkingSpaceById = {
  parkingspace: {
    id: number;
    space_number: number;
    sensor_value: number;
    lot_number: number;
    availabilty: string;
  };
};

export interface ReservationProps {
  reservation: {
    space_id: number;
    vehicle_name: string;
    start_time: string;
    start_date: string;
    end_time: string;
    end_date: string;
    payment: string;
  };
}

//modal
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
