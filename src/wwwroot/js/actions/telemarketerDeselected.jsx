const telemarketerDeselected = (telemarketer) => {
    return {
        type: 'TELEMARKETER_DESELECTED',
        telemarketer
    }
}

export default telemarketerDeselected;