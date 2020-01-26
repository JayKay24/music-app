import React from 'react';
import {
    Table,
    Button
} from 'react-bootstrap';


function MatchTable(param) {

    const soundRecordingMatched = param.soundRecordingMatched;
    const deleteMatch = param.deleteMatch;

    return (
        <div>
            <div className="center">
                <h2 className="subtitle">Registry</h2>
            </div>
            <Table className="match-table" striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>ISRC</th>
                        <th>Duration</th>
                        <th>Unmatch</th>
                    </tr>
                </thead>
                <tbody>
                    {soundRecordingMatched.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.isrc}</td>
                                <td>{song.duration}</td>
                                <td><Button variant="danger" onClick={() => deleteMatch(song, index)}><i className="fas fa-undo-alt"></i></Button></td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    );
}
export default MatchTable;
