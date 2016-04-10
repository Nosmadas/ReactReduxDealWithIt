const telemarketers = [
    { name: 'Big Ass', selected: false },
    { name: 'Booty Sweat', selected: false },
    { name: 'Shitty Butters', selected: false },
    { name: 'Buttland', selected: true }];

const territories = [
    { name: "North" },
    { name: "South West", t2: [{ name: "Dorset" }] },
    { name: "South East" }];

const initialState = {
    telemarketers: telemarketers,
    territories: territories
};

export default initialState;