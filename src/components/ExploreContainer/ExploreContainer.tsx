
import ReservaItem from '../ReservaItems/ReservaItem';

interface ContainerProps {
  name: string;
  
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return ( 
    <div  className={ `ion-text-center ion-justify-content-center container` }>
      <strong>{name}sebas Componente</strong>
      <ReservaItem  name="Coliseo" route='HorariosColiseo'  />
      <ReservaItem  name="Estadio" route='HorariosCancha'/>
      <ReservaItem  name="Implementos" route='ReservaImplementos'/>
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
    </div>
  );
};

export default ExploreContainer;
