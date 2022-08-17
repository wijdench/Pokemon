import React, { useEffect, useState }  from 'react';
import { styled }                      from '@mui/material/styles';
import Card                            from '@mui/material/Card';
import CardHeader                      from '@mui/material/CardHeader';
import CardMedia                       from '@mui/material/CardMedia';
import CardContent                     from '@mui/material/CardContent';
import CardActions                     from '@mui/material/CardActions';
import Collapse                        from '@mui/material/Collapse';
import Avatar                          from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography                      from '@mui/material/Typography';
import { red }                         from '@mui/material/colors';
import FavoriteIcon                    from '@mui/icons-material/Favorite';
import ExpandMoreIcon                  from '@mui/icons-material/ExpandMore';
import { PokemonDetail}                from '../../model'
import pokemonImageApi                 from '../../api/pokemonImageApi'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

type ImageCardProps = {
  pokemon: PokemonDetail,
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ImageCard = ({ pokemon }: ImageCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if(pokemon) {
      async function fetchPokemonImage() {
        const imageBlob = await pokemonImageApi.getImage({ id: pokemon.id })
        const imageObjectURL = URL.createObjectURL(imageBlob)
        setImage(imageObjectURL)
      }
      fetchPokemonImage()
    }
  }, [pokemon]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 250 }} key={pokemon.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {pokemon.id}
          </Avatar>
        }
        title={pokemon.name.english}
      />
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt= {`pokemon${pokemon.id}`}
        sx={{width:'100px', margin:'auto', display:'block'}}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography  variant="body2" color="text.secondary">{`ID: ${pokemon.id}`}</Typography>
          <Typography  variant="body2" color="text.secondary">{`Name: ${pokemon.name.english}`}</Typography>
          <Typography  variant="body2" color="text.secondary">{`Types: ${pokemon.type.toString()}`}</Typography>
          <Typography  variant="body2" color="text.secondary">{`HP: ${pokemon.hp}`}</Typography>
          <Typography  variant="body2" color="text.secondary">{`Attack: ${pokemon.attack}`}</Typography>
          <Typography  variant="body2" color="text.secondary">{`Defense: ${pokemon.defence}`}</Typography>
          <Typography  variant="body2" color="text.secondary">{`Speed: ${pokemon.speed}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}