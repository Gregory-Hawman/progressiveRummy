export default function discardCard(props) {
    props.discardPile.splice(0, 0, props.drawnCard)
    props.setDiscardCount(props.discardCount + 1)
    props.setHasCardDrawn(false)
    props.setDrawnCard([])
    if (props.discardPile[0].includes('H') || props.discardPile[0].includes('D') || props.discardPile[0].includes('R')) {
        props.setIsDiscardRed(true)
    } else {
        props.setIsDiscardRed(false)
    }    
}
