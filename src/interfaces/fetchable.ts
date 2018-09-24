import FetchableState from "../entities/enums/fetchable_state";

export default interface IFetchable {
    fetchState: FetchableState;
    fetchError?: string;
}
