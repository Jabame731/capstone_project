export interface ParkingLot {
  id: number;
  name: string;
  address: string;
  capacity: number;
}

export interface ParkingLotState {
  parkingLots: ParkingLot[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
