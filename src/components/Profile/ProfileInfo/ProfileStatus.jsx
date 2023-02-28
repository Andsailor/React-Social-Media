import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log("componentDidUpdate");
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        console.log('render');
        return (
            <React.Fragment>
                <div >
                    {this.state.editMode === true ?
                        <div>
                            <input
                                onChange={this.onChangeStatus}
                                autoFocus={true}
                                onBlur={this.deactivateEditMode}
                                defaultValue={this.props.status} />
                        </div> :

                        <div>
                            <span onClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                        </div>
                    }
                </div>
            </React.Fragment >
        )
    }
}

export default ProfileStatus