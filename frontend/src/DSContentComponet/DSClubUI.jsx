import React, { useContext } from 'react';
import { HeaderContext } from '../components/Header';

const DSClubUI = () => {
    const { currentPlayer } = useContext(HeaderContext);
    const { no, name, club } = currentPlayer
    return (
        <table className='tb club'>
            <caption></caption>
            <colgroup>
                <col className='w1' />
                <col className='w2' />
            </colgroup>
            <thead>
                <tr>
                    <th colSpan={2} className='noth'>두산베어스 NO.{no}</th>
                </tr>
                <tr>
                    <th colSpan={2} className='nameth'>{name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='clubhistory' rowSpan={club.length + 1}>소속팀</td>
                </tr>
                {
                    club.map((item, idx) =>
                        <tr key={idx}>
                            <td className='clublist'>{item.c}</td>
                        </tr>

                    )
                }
            </tbody >
        </table >
    );
};

export default DSClubUI;