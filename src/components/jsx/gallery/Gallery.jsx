import React from "react";



export default class Gallery extends React.Component {
    render() {
        return (
            <>
                <GalleryCard />
            </>
        )
    }
}





const imgUrls = [
    "https://source.unsplash.com/PC_lbSSxCZE/800x600",
    "https://source.unsplash.com/lVmR1YaBGG4/800x600",
    "https://source.unsplash.com/5KvPQc1Uklk/800x600",
    "https://source.unsplash.com/GtYFwFrFbMA/800x600",
    "https://source.unsplash.com/Igct8iZucFI/800x600",
    "https://source.unsplash.com/M01DfkOqz7I/800x600",
    "https://source.unsplash.com/MoI_cHNcSK8/800x600",
    "https://source.unsplash.com/M0WbGFRTXqU/800x600",
    "https://source.unsplash.com/s48nn4NtlZ4/800x600",
    "https://source.unsplash.com/E4944K_4SvI/800x600",
    "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
    "https://source.unsplash.com/iPum7Ket2jo/800x600"
];

class GalleryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
    }
    renderImageContent(src, index) {
        return (
            <div onClick={(e) => this.openModal(e, index)}>
                <img src={src} key={src} />
            </div>
        );
    }
    openModal(e, index) {
        this.setState({ currentIndex: index });
    }
    closeModal(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }
    findPrev(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    findNext(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="gallery-container">
                
                <div className="gallery-grid">
                    {imgUrls.map(this.renderImageContent)}
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < imgUrls.length}
                    src={imgUrls[this.state.currentIndex]}
                />
            </div>
        );
    }
}

class GalleryModal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        document.body.removeEventListener("keydown", this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.keyCode === 27) this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
    }
    render() {
        const {
            closeModal,
            hasNext,
            hasPrev,
            findNext,
            findPrev,
            src
        } = this.props;
        if (!src) {
           
            return null;
        }
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}></div>
                <div isOpen={!!src} className="modal" style={{display:"block"}}>
                    <div className="modal-body">
                        <a
                            href="#"
                            className="modal-close"
                            onClick={closeModal}
                            onKeyDown={this.handleKeyDown}
                        >
                            &times;
                        </a>
                        {hasPrev && (
                            <a
                                href="#"
                                className="modal-prev"
                                onClick={findPrev}
                                onKeyDown={this.handleKeyDown}
                            >
                                &lsaquo;
                            </a>
                        )}
                        {hasNext && (
                            <a
                                href="#"
                                className="modal-next"
                                onClick={findNext}
                                onKeyDown={this.handleKeyDown}
                            >
                                &rsaquo;
                            </a>
                        )}
                        <img src={src} />
                    </div>
                </div>
            </div>
        );
    }
}

