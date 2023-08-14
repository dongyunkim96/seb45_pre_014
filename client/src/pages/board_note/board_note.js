import styled from 'styled-components';
import { useEffect, useState } from 'react';//답변하기 누르면 리렌더링 되야함
import './board_note.css';
import { Link } from 'react-router-dom';

const BoardNoteHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
`

const BoardNoteTitle = styled.h2`
  text-align: left;
  margin-bottom: 5px;
`

const BoardNoteElse = styled.div`
  font-size: 12px;
`

const BoardNoteProfile = styled.div`
  height: 50px;
  border: 0.2px solid black;
`

const BoardNoteEdit = styled.button`
  font-size: 12px;
`

const BoardNoteDelete = styled.button`
  font-size: 12px;
`
const Line = styled.hr`
  width: 60vw;
`

const BoardNoteNote = styled.div`
  height: 50vh;
  text-align: left;
`
const BoardNoteReplyCount = styled.div`
  text-align: left;
`
const BoardNoteMyReplyForm  = styled.form`
  display: flex;
  flex-direction: column;
`
const BoardNoteMyReplyTitle = styled.h3`
  text-align: left;
`
const BoardNoteMyReply = styled.textarea`
  resize: none;
  width: 60vw;
  
`
const BoardNoteMyReplyButton = styled.button`
  margin-right: auto;
  background-color: #0a95ff;
  border-radius: 5px;
  border: none;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  &:active{
    background-color: #0174cb;
  }
`

const DeletePopup = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`
const DeletePopupButton = styled.button`

`

const CancelPopupButton = styled.button`
`
export function BoardNote(){
  const [deletepopup, setdeletepopup] = useState(false)


  return (
    <div className='board_note'>
      <div className='board_note_container'>
        <BoardNoteHead>
          <div className='title_andelse'>
            <BoardNoteTitle>타이틀</BoardNoteTitle>
            <BoardNoteElse>수정일/질문일/조회수</BoardNoteElse>
          </div>
          <div className='profile_edit_delete_button'>
            <BoardNoteProfile>프로필</BoardNoteProfile>
            <div className='edit_delete_button'>
              <Link to='/boardedit'><BoardNoteEdit>수정하기</BoardNoteEdit></Link>
              <BoardNoteDelete onClick={()=>setdeletepopup(true)}>삭제하기</BoardNoteDelete>
            </div>
          </div>
        </BoardNoteHead>
        <Line></Line>
        <BoardNoteNote>질문 블라블라</BoardNoteNote>
        <BoardNoteReplyCount>답변이 ~개 있습니다.</BoardNoteReplyCount>
        {/* {답변들 위치할 자리} */}
        <BoardNoteMyReplyForm>
          <BoardNoteMyReplyTitle>답변하기</BoardNoteMyReplyTitle>
          <BoardNoteMyReply rows='10'></BoardNoteMyReply>
          <BoardNoteMyReplyButton>답변하기</BoardNoteMyReplyButton>
        </BoardNoteMyReplyForm>
      </div>
      <div className={deletepopup === true ? 'deletepopuptrue' : 'deletepopupfalse'}>
        {console.log(deletepopup)}
        <DeletePopup>
          <div>삭제 하시겠습니까?</div>
          <div className='delete_popup_buttons'>
            <Link to='/board'><DeletePopupButton>삭제</DeletePopupButton></Link>
            <CancelPopupButton onClick={()=>setdeletepopup(false)}>취소</CancelPopupButton>
          </div>
        </DeletePopup>
        
        
      </div>
      
    </div>
  )
}