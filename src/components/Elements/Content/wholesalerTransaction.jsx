const WholesalerTransaction = (props) => {
    return (
<>
      <h1 className="d-title">Wholesaler Transaction Structuring</h1>
      <hr />
      <p className="mt-4">
        In this case, there are two sources of data tables which are
        the Purchase Report and the Sales Report. Both reports are
        updated monthly. The report structuring solely uses the
        features in Google BigQuery. The final output are Inventory
        Report and Margin Report based on the aggregation of Sales
        and Purchase reports.
      </p>
      <img
        src="img/data_eng3/table_aggregation2.png "
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2">
        The Purchase and Sales reports consist of transaction
        information such as, product name, price and quantity as
        shown in the table below. The values are then, aggregated
        based on each date.
      </p>
      <img
        src="img/data_eng3/sales_purchase_report.png"
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2">
        The aggregated table serves as the basis in calculating the
        margin and stock inventory. Below are the example of margin
        and inventory calculation for each day.
      </p>
      <p>Margin table:</p>
      <img
        src="img/data_eng3/margin_report.png"
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2">Inventory table:</p>
      <img
        src="img/data_eng3/inventory_report.png"
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
                        </>

    )

}

export default WholesalerTransaction;