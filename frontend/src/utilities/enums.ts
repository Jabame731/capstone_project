export type ParkingLot = {
  id: number;
  name: string;
  address: string;
  capacity: string;
};

export type ParkingSpaces = {
  id: number;
  space_number: number;
  sensor_value: number;
  lot_number: number;
  availabilty: string;
};

//modal
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
