type Test = number | string;

export const TestComponent = (
    test: number, test2
) => {
    if (5 === Number('5')) {
        //
    }

    const arr = [ 1, 2, 3 ];

    const val = arr[ 1 ];

    return (
        <div>
            <div
                className="this is one property"
                id=""
            />
            <div
                className="this is two"
                id="properties"
            />
        </div>
    );
};
