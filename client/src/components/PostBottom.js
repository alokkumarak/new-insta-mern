import React from 'react'
import '../css/postbottom.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Input } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const comment_icon = "https://cdn141.picsart.com/328471446044211.png?type=webp&to=min&r=1280"

function PostBottom() {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className="postbottom">
            <div className="postbottom__icons">
                <div className="postbottom__iconleft">
                    <FavoriteBorderOutlinedIcon />
                    <img src={comment_icon} alt="comment icon"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        // aria-haspopup="true"
                        onClick={handleToggle} />
                    <NearMeOutlinedIcon />
                </div>
                <div className="postbottom__iconright">
                    <TurnedInNotIcon />
                </div>
            </div>
            <div className="postbottom__likes">
                12,025 likes
            </div>
            <div className="postbottom__comments">
                View all 112 comments
            </div>
            <div className="comments">
                <div><b>Rajan Kumar</b> this is really nice pic.</div>
                <div><b>Alok Kumar</b> this is really nice pic jjdhjd n fsdfj n nbfds.</div>
            </div>
            <div className="timestamp">
                22 Hours Ago
            </div>



            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <div className="addcomment">
                            <Paper >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <Input type="text" className="commentFiled" placeholder="Write a comment here..." required /><SendIcon onClick={handleClose} />
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </div>
                    </Grow>
                )}
            </Popper>

        </div>
    )
}

export default PostBottom
