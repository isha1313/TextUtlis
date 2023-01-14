
import propTypes from 'prop-types';

function NavBar(props){

return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`} >
  <a className="navbar-brand"   href="/">{props.Tittle}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('White')}>Default Mode</button>
</div>
    <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('DimGrey')}>Dark Mode</button>
</div>
<div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('PaleVioletRed')}>PaleVioletRed Mode</button>
</div>
<div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('LightBlue')}>LightBlue Mode</button>
</div>
<div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('LightCoral')}>Light Coral Mode</button>
</div>
<div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('Teal')}>Teal Mode</button>
</div>
<div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-light" onClick={()=>props.toggle('DarkSeaGreen')}>DarkSeaGreen Mode</button>
</div>
  </div>
</nav>

    </>
)

}
export default NavBar;


NavBar.propTypes={Tittle:propTypes.string, 
                  About:propTypes.string};
NavBar.defaultProps={Tittle:"TextUtils",About:'About'};
