import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown, FaFilter, FaTimes } from 'react-icons/fa';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { countries, university } from '../../data/filterdata/autocomplete';
import useDarkMode from '../../hooks/useDarkMode';

const Select = ({ label, options }) => (
    <div className="relative flex-1 min-w-[50px]">
        <select className="block appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-md leading-tight focus:outline-none focus:shadow-outline text-black">
            <option value="">{label}</option>
            {options.map(option => (
                <option key={option.value} value={option.value} className="text-black">
                    {option.label}
                </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <FaCaretDown className="text-lg text-black" />
        </div>
    </div>
);

Select.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const FilterUniversity = () => {
    const { DarkMode } = useDarkMode();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearch = () => {
        console.log("Selected Country:", selectedCountry);
        console.log("Selected Country:", selectedUniversity);

    };

    const autocompleteStyles = {
        width: 220,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none'
            },
            '&:hover fieldset': {
                borderColor: DarkMode ? 'white' : 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: DarkMode ? 'white' : 'black',
            },
            color: DarkMode ? 'white' : 'black',
        },
        '& .MuiInputLabel-root': {
            color: DarkMode ? 'white' : 'black',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: DarkMode ? 'white' : 'black',
        },
        '& .MuiAutocomplete-popupIndicator': {
            color: DarkMode ? 'white' : 'black',
        },
        '& .MuiAutocomplete-clearIndicator': {
            color: DarkMode ? 'white' : 'black'
        }
    };

    return (
        <div>
            {/* Toggle button for small screens */}
            <button
                className="md:hidden fixed top-15 right-4 z-50 bg-blue-500 text-white p-2 rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaFilter />}
            </button>

            {/* Side menu for small screens */}
            <div
                className={`fixed top-15 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden ${DarkMode ? 'bg-gray-950' : 'bg-white'}`}
            >
                <div className="p-4">
                    <div className="flex flex-col gap-4">
                        <Autocomplete
                            disablePortal
                            id="countries-autocomplete"
                            options={countries}
                            getOptionLabel={option => option.label}
                            sx={autocompleteStyles}
                            onChange={(event, newValue) => setSelectedCountry(newValue)}
                            renderInput={params => <TextField {...params} label="Countries" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="study-level-autocomplete"
                            options={university}
                            getOptionLabel={option => option.label}
                            sx={autocompleteStyles}
                            onChange={(event, newValue) => setSelectedUniversity(newValue)}
                            renderInput={params => <TextField {...params} label="University" />}
                        />
                        <button
                            onClick={handleSearch}
                            type="submit"
                            className={`w-full py-2 rounded-full text-white ${DarkMode ? 'bg-blue-600' : 'bg-blue-400'}`}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content for larger screens */}
            <div className={`hidden md:flex flex-col md:flex-row justify-center paddingcontainer paddingbuttom mx-auto`}>
                <div className={`border rounded-full p-2 md:flex ${DarkMode ? 'bg-gray-950' : 'bg-white'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-1 p-1 rounded-full justify-between items-center">
                        <div className=" after:border-slate-800/20 flex justify-center items-center after:h-6 cursor-pointer rounded-full">
                            <Autocomplete
                                disablePortal
                                id="countries-autocomplete"
                                options={countries}
                                getOptionLabel={option => option.label}
                                sx={autocompleteStyles}
                                onChange={(event, newValue) => setSelectedCountry(newValue)}
                                renderInput={params => <TextField {...params} label="Countries" />}
                            />
                        </div>
                        <div className=" after:border-slate-800/20 flex justify-center items-center after:h-6 cursor-pointer rounded-full">
                            <Autocomplete
                                disablePortal
                                id="university-autocomplete"
                                options={university}
                                getOptionLabel={option => option.label}
                                sx={autocompleteStyles}
                                onChange={(event, newValue) => setSelectedUniversity(newValue)}
                                renderInput={params => <TextField {...params} label="University" />}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSearch}
                        type="submit" className=" py-1 md:px-12 sm:px-10 px-16 bg-blue-400 rounded-full text-white">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterUniversity;
