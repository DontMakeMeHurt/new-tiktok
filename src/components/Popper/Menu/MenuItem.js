
import Button from '../../Button';

function MenuItem({ data }) {
    return (
        <Button forItem leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;