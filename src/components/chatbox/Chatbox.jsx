import React from 'react'
import './Chatbox.css';

function Chatbox() {
  return (
    <>
    <div >
        <div className='container '>
           <div className='message right'>Kunal: hey</div>
           <div className='message left'>param: Hii</div>
        </div>

        <div className="send mt-1">
            <form action="#" id='msgsend'>
                <input className='inputmsg border border-black w-[65%]' type="text" name='inputmsg' id='inputmsg' />
                <button className='sendbtn ml-2 ' type='submit'>send</button>

            </form>
        </div>

    </div>
    </>
  )
}

export default Chatbox
