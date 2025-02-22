const Table = () => {
    const users = [
        { id: 1, name: "iberviebciuebfefc", email: "efvefcecercerce" },
        { id: 2, name: "imjnuyhbtgvrf", email: "ececececercf" },
        { id: 3, name: "i8mjunyhbtgvrfce", email: "efcewer" },
        { id: 4, name: "ujnhybtgvrfced", email: "4rcedwvt" },
        { id: 5, name: "ynjhbtgvrfced", email: "5tbvr4ecd" },
        { id: 6, name: "ujnyhbtgvrf", email: "imkujnyhbtgvr" },
        { id: 7, name: "jnyhbtgvrfc", email: "kumjnyhbtgvrf" },
        { id: 8, name: "ujnyhbtgvrfc", email: "ikmujnyhbtgvrf" },
    ];

    return (
        <div className="table-responsive shadow-lg rounded">
            <table className="table table-striped table-bordered table-hover">
                <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">sth</th>
                    <th scope="col">somewhere</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
