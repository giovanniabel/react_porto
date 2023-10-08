const SentenceEmotion = () => {
    return (
      <>
        <h1 className="d-title">Sentence Emotion Detection</h1>
        <hr />
        <p>
        Given a dataset of an Indonesiain short story, this projects
        aims to create a model that could determine the emotion of a
        sentence based on the dataset using classification
        algorithm.
        </p>
        <h3>Methodology</h3>
        <img
        src="img/ds4/ds4_flow_diagram.jpg"
        alt="Flow Diagram"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100% mb-4;"
        />
        <p>
        The data firstly pre-processed using regex, word steming and
        stop words. Then, the bag-of-words and TF-IDF were created
        as the input for the model. There were 2 models created
        using the same algorithm, one using Bag-of-Words and the
        other using TF-IDF.
        </p>
        <ul>
        <li>
            Dataset: 1000 rows (sentences) with labelled emotion
        </li>
        <li>
            Model: Multinomial Naive-Bayes using Bag-of-Words and
            TF-IDF
        </li>
        <li>Data Splitting: train data 80% and test data 20%</li>
        </ul>
        <h3>Data Exploration</h3>
        <p>
        It is essential to take a look at the dataset and discover
        label proportoin within the dataset as shown below
        </p>
        <img
        src="img/ds4/ds4_dataset.png"
        alt="Data Variables"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
        />
        <img
        src="img/ds4/proporsi_label.png"
        alt="Data Proportion"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
        />
        <p>
        There are 6 emotions contained in the dataset, which are:
        </p>
        <ul>
        <li>Happy <i>(senang)</i></li>
        <li>Sad <i>(sedih)</i></li>
        <li>Surprised <i>(terkejut)</i></li>
        <li>Angry <i>(marah)</i></li>
        <li>Scared <i>(takut)</i></li>
        <li>Disgusted <i>(jijik)</i></li>
        </ul>
        <h3>Data Pre-processing</h3>
        <p>The sentences are preprocessed by:</p>
        <ul>
        <li><b>Removing digits</b></li>
        <p>Using regex function to remove digits</p>
        <p>
            Before:'Jatuhnya Jayakarta ke tangan Kompeni Belanda pada
            tahun <u>1619 </u> membuat banyak ulama marah.'
        </p>
        <p>
            After: 'Jatuhnya Jayakarta ke tangan Kompeni Belanda pada
            tahun membuat banyak ulama marah.'
        </p>
        <li><b>Word stemming</b></li>
        <p>
            Using Indonesian corpus in Sastrawi library to take the
            word stem
        </p>
        <p>
            Before:'Jatuhnya Jayakarta ke tangan Kompeni Belanda pada
            tahun membuat banyak ulama marah.'
        </p>
        <p>
            After: '<u>jatuh</u> jayakarta ke tangan kompeni belanda
            pada tahun <u>buat</u> banyak ulama marah'
        </p>
        <li><b>Removing stop Words</b></li>
        <p>
            Using Indonesian corpus in Sastrawi library to remove the
            stop words
        </p>
        <p>
            Stopwords in Indonesian includes: 'yang', 'untuk', 'pada',
            'ke', 'para', 'namun'
        </p>
        </ul>
        <h3>Feature Extraction</h3>
        <ul>
        <li>Bag-of-Words</li>
        <img
            src="img/ds4/bag_of_words.png"
            alt="Bag of Words"
            style={{objectFit: 'contain', width: '100%'}}
            className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
        />
        <li>TF-IDF</li>
        <img
            src="img/ds4/tf_idf.png"
            alt="TF IDF"
            style={{objectFit: 'contain', width: '100%'}}
            className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
        />
        </ul>
        <h3>Model Training</h3>
        <p>
        The model used is Multinomial Naive Bayes and laplace
        smoothing is applied to the model.
        </p>
        <div className="row">
        <div className="col">
            <img
            src="img/ds4/result_bow.png"
            alt="Dashboard Prototype"
            style={{objectFit: 'contain', width: '100%'}}
            className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
            />
        </div>
        <div className="col">
            <img
            src="img/ds4/result_tfidf.png"
            alt="Dashboard Prototype"
            style={{objectFit: 'contain', width: '100%'}}
            className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
            />
        </div>
        </div>
        <img
        src="img/ds4/mnb_model_comparison.png"
        alt="model metrics"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
        />
        Based on the multinomial NB text classification, it is
        concluded that: <br />
        <ul>
        <li>
            Overally, the model accuracy using Bag-of-words achieved
            higher accuracy
        </li>
        <li>
            Laplace helpls in improving the model accuracy as much as
            10-11%
        </li>
        <li>
            Due to unequal label distribution, it causes the model to
            determine the most frequent label more accurate than the
            least frequent labels
        </li>
        </ul>
        <p>
        Checkout the source code on
        <a href="https://github.com/giovanniabel/sent_emot_det"
            >Github</a
        >
        </p>
            </>

    )

}

export default SentenceEmotion;