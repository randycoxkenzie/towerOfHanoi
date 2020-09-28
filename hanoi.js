const isGameOver = function () {
    return towerC.childElementCount === 4
}

const showWinMessage = function () {
    // TODO: Tell the user that they just won the game
}

const towerClick = function (evt) {
    let clickedTower = evt.currentTarget
    let topDisc = clickedTower.firstElementChild
    let handEl = document.querySelector("#hand")

    // Is the handEl empty?
    //    If yes, move the topDisc into the handEl.
    //        handEl.append(topDisc)
    //    If no, the player must be trying to drop a disc.
    //        Is the disc in the handEl smaller than the topDisc in the tower?
    //        (compare topDisc.dataset.size to handEl.firstElementChild.dataset.size)
    //            If yes, move the disc from handEl into clickedTower.

    if (isGameOver()) {
        showWinMessage()
    }
}

const towerA = document.querySelector("#towerA")
const towerB = document.querySelector("#towerB")
const towerC = document.querySelector("#towerC")

towerA.addEventListener('click', towerClick)
towerB.addEventListener('click', towerClick)
towerC.addEventListener('click', towerClick)