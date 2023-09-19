import Card from '../Card';
import './habitations.css';

const Habitations = ({ element }) => {
  return (
    <div className="container-fluid">
      <div className="habitations row">
        {element.map((item) => (
          <Card key={item.id} element={item} />
        ))}
      </div>
    </div>
  );
};
export default Habitations
