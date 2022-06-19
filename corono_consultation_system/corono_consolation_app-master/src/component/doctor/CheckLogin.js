import { Component } from "react";
import './CheckLogin.css';

class CheckLogin extends Component {
    render() {
        return (
            <div>
                <div class="container">

                    <h3>Log In Demo</h3>
                    <button type='button' class="btn btn-success" data-toggle="modal" data-target="#popUpWindow">Open Log In Window</button>
                    <div class="modal fade" id="popUpWindow">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" data-dismiss="modal">&times;
                                    <h3 class="modal-title" style={{marginRight:"263px"}}>Doctor Login</h3>
                                    </button>
                                </div>
                                <div class="modal-header">
                                    <form role="form">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email-Id" />
                                            <input type="password" class="form-control" placeholder="Password" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary btn-block">Log In</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }


}

export default CheckLogin;