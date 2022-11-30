import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from "./Filter.styled";

export const Filter = () => {

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return(
        <Label>Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={event => dispatch(filterUpdate(event.target.value))}
            />
        </Label>
    );
};
