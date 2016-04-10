const telemarketers = [
    { name: 'Big Ass', selected: false, cards: { } },
    { name: 'Booty Sweat', selected: false,  cards: { } },
    { name: 'Shitty Butters', selected: false,  cards: { } },
    { name: 'Buttland', selected: true,  cards: { } }];

const territories = [
    { name: "North" },
    { name: "South West", t2: [{ name: "Dorset" }] },
    { name: "South East" }];

const initialState = {
    telemarketers: telemarketers,
    territories: territories
};

export default initialState;