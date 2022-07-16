import TableHeader from './TableHeader'
import TableBody from './TableBody';

function Table({ books }) {
    return (
        <table className='table'>
            <TableHeader />
            <TableBody books={books} />
        </table>
    )
}

export default Table;