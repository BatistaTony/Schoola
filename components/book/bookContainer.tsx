import { BookContainerStyled, Cover, InfoBook, ReviewBookStyled } from './style';
import UserAvatar from '@/elements/avatar';
import { OwnerContainer } from '@/components/books/styles';

const BookContainer = () => {
  return (
    <BookContainerStyled>
      <Cover cover="fd" />
      <InfoBook>
        <h1 className="title">LEADERS EAT LAST</h1>
        <p className="author">Simon Sinek</p>
        <p className="year">2020</p>
        <OwnerContainer>
          <UserAvatar src="avatar.jpg" size="small" />
          <p>Batista Oliveira</p>
        </OwnerContainer>
        <div className="buttonsBook"></div>
      </InfoBook>
      <ReviewBookStyled>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut placeat incidunt quo.
          Aliquid vel culpa distinctio inventore consequatur voluptate, in, amet adipisci illo
          voluptatum eum, laudantium natus cupiditate! Nihil delectus, ut eos inventore recusandae
          aliquam deserunt quidem aspernatur iste laudantium nam beatae reprehenderit accusantium
          necessitatibus odio. A necessitatibus praesentium quas inventore laboriosam nisi,
          architecto, perferendis mollitia ut optio nesciunt delectus dignissimos reiciendis natus
          blanditiis, unde quae sapiente illum. Dolor, ipsam aliquam! Dolorem nemo cumque earum
          aperiam quam praesentium provident, libero harum rem. Consectetur voluptatum sint, ducimus
          atque itaque doloremque soluta quos qui architecto nihil amet unde sequi libero,
          reprehenderit adipisci quis iure debitis tenetur dicta commodi laboriosam. Debitis impedit
          pariatur ut quibusdam ipsam ullam sed omnis id labore cum quas exercitationem, doloremque
          enim non quisquam ea nostrum! Consequatur accusamus, rem accusantium ratione hic
          exercitationem illo totam expedita. Similique architecto ipsa pariatur unde maxime ex
          quas, ad esse ullam reprehenderit rerum natus dignissimos officia, eum quasi eos nobis
          sapiente quidem tenetur. Accusantium quisquam recusandae rem sed quia quasi. Suscipit
          mollitia porro est nisi voluptatibus unde beatae magnam eum, autem iusto. Eum dicta quam
          delectus et rem dolores pariatur deserunt, atque nulla reprehenderit similique facere
          quasi voluptate blanditiis. Dolor, odit. Quas?
        </p>
      </ReviewBookStyled>
    </BookContainerStyled>
  );
};

export default BookContainer;
