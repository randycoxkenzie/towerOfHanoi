1. Provide a way to select a disc from the top of a tower
   1. Click handler for each tower
   2. "pick up" the top disc on the tower
      1. towerelement.firstElementChild
   3. Move the picked up disc into my hand
2. Provide a way to "drop" the disk on top of another tower, if the rules allow
3. Check to see if the game is over--"winning condition"

----

2. Click to select a tower to automatically select the top ring
    - Event listener for click on tower
    - Append into hand
    - Increment move counter only if ring is dropped
3. Visually indicate that top ring is selected
    - Link holds up the ring in pick up mode
    - Link puts his hands down when nothing is in hand
4. Click to select the target drop tower
    - Check to make sure ring in hand is smaller than target drop tower
    - If hand-ring is smaller, then drop. Else, return
5. Check for win
    - Each time user drops 
Questions:
    - How to copy nodes
    - How to tell if game is won
    - Refactoring best practices
    - Implementing animations

----

HTML
3 divs for the towers
4 divs for the disks
1 hand div
CSS
style the tower divs as wide towers
add a bright border change when a tower is clicked to indicate a tower is selected
style the disk divs to be inside of the first tower stacked on one enough from biggest to smallest
style hand div to be a big in the top, middle of the screen
JS
1. add click events to each tower
	- when a tower is clicked move the top disk from the tower to the hand div
	- on second click move disk from hand to tower that was clicked
2. Add game rules
	- check towers for number of disks in tower
	-do not allow a larger tower to be placed on a smaller tower ie. towerOne cannot be place on towerFour
	-add if statement if all four disks are on the third tower = game win

----

1. Pickup Stage:
    1a. select a tower (#start, #middle, & #end)
        1a1. selected tower gets highlighted (border styling)
        1a2. tower's top disc (tower'sId.lastElementChild) gets highlighted
2. Drop Stage:
    2a. select a new tower [newTower = document.getElementByClassName("towers")]
        2a1. selected tower gets highlighted (border styling)
    2b. is new tower empty? -->> does newTower.childElementCount == 0"? <<--
        2b1. if YES, then move disc to new tower -->> document.newTower.appendChild(discID)
        2b2. if NO, then is elementClientWidth.currentChild (the selected disc) < elementClientWidth.lastElementChild (topmost disc on newTower)?
            2b2a. if YES, then appendChild(discID)
            2b2b. if NO, then error message ("This disc can't be placed on a smaller disc".
3. Winning Condition:
    3a. #end holds all discs, stacked in same order as #start did (smallest to largest)
        3a1. elementClientWidth.lowerDisc !> elementClientWidth.upperDisc

----

1. Click start tower
        1. Create 3 towers
            1. Create Start Tower
            2. Create Offset Tower
            3. Create End Tower
                1. Document.createElement 3 Divs (start, offset, end)
        2. Create 4 disks in tower
            1. Small Disk
            2. Medium Disk
            3. Large Disk
            4. X-Large Disk
                1. Document.createElement 4 Divs (or Spans) (S, M, L, XL)
        3. Click on tower to access disks
            1. Target tower
            2. Grab disk
            3. Duplicate disk
                1. Create event listener function (click)
                * Attach a click handlers to the 3 towers, not the disks
                2. Document.getElementByID to get towers
 2. Disk in hand
     1. Join disk
         1. Acknowledge disk (duplicate)
         2. Test to make sure its the right disk
         3. If not right reject; if right keep
             1. Hand will be in pick up disk in tower mode
             2. Dot append (.append)
     2. Hold disk
         1. Wait for next instructions
     3. Be on stand-by (awaiting next move)
         1. Watch for signal
         2. Don’t do anything until a signal is given
         3. Once signal received execute next move
             1. Click event listener
 3. Click next tower
     1. Determine next tower
         1. View all 3 towers
         2. View disks in towers (if any at all)
             1. Event delegation; create 1 event listener that has access to a div containing many items
     2. Click on tower
         1. Click tower if disk in hand is smaller than disk in tower
         2. Selected tower is on standby
         3. Await next instructions
             1. Attach a click handlers to the 3 towers, not the disks
     3. Call the hand to tower
         1. Tower signals had with disk
         2. Tower awaits hand to confirm
         3. Tower is prepared to receive disk
             1. Click handler should grab the first node in the container (tower)
 4. Release disk from hand
     1. Go to next tower
         1. Hand checks if tower is ready to receive disk
         2. If tower not ready; continue to hold disk
         3. If tower is ready access tower
             1. Hand will be in drop disk in tower mode
     2. Access tower
         1. Hand requests entry into tower
         2. Hand awaits feedback from tower
         3. Tower opens for hand
             1. Dot append (.append)
     3. Release disk
         1. Join disk to opened tower
         2. Return to staging position
         3. Await next signal/move; then repeat
             1. Hand will be in one of two states/modes: Pick up disk mode or drop disk in tower mode