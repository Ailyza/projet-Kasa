import Card from '../Card';
import './habitations.css';

const Habitations = ({ element }) => {
  console.log(element)
  return (
    <div className="">
      <div className="container-fluid">
        {element.map((item) => (
          <Card className="card" key={item.id} element={item} />
        ))}
      </div>
    </div>
  );
};
export default Habitations
