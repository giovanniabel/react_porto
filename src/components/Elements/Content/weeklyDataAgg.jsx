const WeeklyDataAgg = (props) => {
    return (
      <>
      <h1 className="d-title">Weekly Data Aggregation</h1>
      <hr />
      <p className="mt-2">
        The data source consists of three tables which are:
      </p>
      <ul>
        <li>
          Old Order Table: Consist of detailed order data up until
          October 2021
        </li>
        <li>
          Order Table: Constantly updated order data starting from
          October 2021 to present
        </li>
        <li>
          Store Info Table: Detailed current registered store
          information
        </li>
      </ul>
      <img
        src="img/data_eng2/table_aggregation.png "
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2">
        Firstly, the Order Table and Store Info Table are joined
        based on customer's phone number as foreign key to
        complement the order information. Then, the duplicates and
        unnecessary fields are removed, subsequently saved as view.
        Whereas the Old Order Table has already sufficient store
        information. Therefore, does not need to be joined with the
        Store Info Table. Since the Old Order table overlaps with
        Order Table on October 2021, hence the order information on
        October 2021 are filtered out and the transformation is
        saved in another view.
      </p>
      <p className="mt-2">
        The next step is to aggregate both views into an aggregated
        table. Both views are aggregated based on Area, Weekname and
        Year, and stored as aggregated tables. The Transformed B
        view is transformed into two different aggregated tables due
        to its different method of aggregation and aggregated
        fields. The aggregated tables are combined and the final
        output is depicted on the table below.
      </p>
      <img
        src="img/data_eng2/final_output.png"
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p style={{fontStyle: 'italic', fontSize: '10px'}}>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;*The values
        shown are dummy data
      </p>
      <p>
        Additionaly a row which sum up the values of the whole Area
        based on each unique combination of year and weekname is
        added.
      </p>
            </>

    )

}

export default WeeklyDataAgg;