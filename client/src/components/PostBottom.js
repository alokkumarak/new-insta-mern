import React, { useState, useContext } from 'react'
import '../css/postbottom.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Avatar, Input } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { UserContext } from '../App';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useSnackbar } from 'notistack';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const comment_icon = "https://cdn141.picsart.com/328471446044211.png?type=webp&to=min&r=1280"

function PostBottom({ topImage, postedByid, username, caption, likes, completedetail }) {
    // console.log(completedetail)
    const { state, dispatch } = useContext(UserContext);
    // console.log(state)
    const [like, setLike] = useState([]);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [openabc, setOpenabc] = useState(false);
    const [comment, setComment] = useState("")
    const [commentShow, setCommentShow] = useState([])
    const { enqueueSnackbar } = useSnackbar();
    // const [likeState, setLikeState] = useState(null);


    const handleClickOpen = () => {
        setOpenabc(true);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenabc(false)
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

    //like and unlike feature

    const likePost = (id) => {
        // e.preventDefault();
        fetch('/like', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('instaToken')
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(likes => {
                const newLike = like.map(likee => {
                    if (likee._id === likes._id) {
                        return likes
                    } else {
                        return likee
                    }
                })
                // setLikeState(likes._id);
                setLike(newLike);
            })
            .catch(err => {
                console.log(err);
            })

        window.location.reload(false);
    }



    const unlikePost = (id) => {
        fetch('/unlike', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('instaToken')
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(unlikes => {
                const newData = like.map(unlike => {
                    if (unlike._id === unlikes._id) {
                        return unlikes
                    }
                    else {
                        return unlike
                    }
                })
                setLike(newData)
                // setLikeState(null);
            }).catch(err => console.log(err))
        // setLikeState(false);
        window.location.reload(false);

    }

    // add comment in post
    const addComment = (text, postId) => {
        if (!text == "") {
            fetch("/comment", {
                method: "put",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('instaToken')
                },
                body: JSON.stringify({
                    postId,
                    text
                })
            }).then(res => res.json())
                .then(commentI => {
                    // console.log(commentI);
                    const commentData = commentShow.map(comment => {
                        if (comment._id === commentI._id) {
                            return commentI;
                        } else {
                            return comment
                        }
                    })
                    setCommentShow(commentData)
                }).catch(err => console.log(err))
        } else {
            enqueueSnackbar("Please Enter some text to comment", {
                variant: 'warning',
            });
        }
        window.location.reload(false);
    }


    // truncate fuction for .. 
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }

    return (
        <div className="postbottom">
            {/* {console.log(like.length)} */}

            <div className="postbottom__icons">
                <div className="postbottom__iconleft">
                    {
                        completedetail.likes.includes(state._id)
                            ? <div className="heart"> <FavoriteIcon onClick={() => unlikePost(completedetail._id)} /></div>
                            : <FavoriteBorderOutlinedIcon onClick={() => likePost(completedetail._id)} />

                    }

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
                {likes} likes
            </div>
            <div onClick={handleClickOpen}><b>{username}</b> {truncate(`${caption}`, 100)}</div>
            <div className="postbottom__comments" onClick={handleClickOpen}>
                View all {completedetail.comments.length} comment
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
                                        <form onSubmit={(e) => {
                                            e.preventDefault()
                                            addComment(e.target[0].value, postedByid)
                                        }}><Input type="text" className="commentFiled" placeholder="Write a comment here..." required /><button ><SendIcon onClick={handleClose} /></button></form>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </div>
                    </Grow>
                )}
            </Popper>


            {/* comment dialog */}

            <Dialog
                open={openabc}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="commentpage">
                    <CloseIcon onClick={handleClose} />
                    <div className="comment__header">
                        <Avatar src={topImage} alt="alt" />
                        <p>{username}</p>
                    </div>

                    <div className="commenthere">

                        {
                            completedetail.comments.map(commentIKJ => {
                                return (
                                    <div className="singleComment">
                                        <div className="commentName">{commentIKJ.postedBy.username}:</div>
                                        <div className="commentComment">
                                            {commentIKJ.text}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="postComment_comment">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            addComment(e.target[0].value, postedByid)
                            setComment("");
                        }}>
                            <input type="text" placeholder="Write a comment here..." value={comment} onChange={e => setComment(e.target.value)} />
                            <button ><SendIcon /></button>
                        </form>
                    </div>
                </div>
            </Dialog>

            {/* caption dialog */}
            {/* <Dialog
                open={openabc}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            > <CloseIcon onClick={handleClose} />
                {caption}
            </Dialog> */}

        </div>
    )
}

export default PostBottom
