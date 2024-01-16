import { ComponentProps } from 'react';

import { ReactComponent as OrganizerMark } from '@/assets/organizer.svg';
import Box from '@/components/common/Box';
import Image from '@/components/common/Image';

import Link from '../Link';
import * as S from './styled';

type PeopleCardProps = ComponentProps<'div'> & {
  img?: string;
  name: string;
  links?: { type: 'GITHUB' | 'LINKEDIN' | 'LINK'; url: string }[];
  part: string;
  isOrganizer?: boolean;
  introduce?: string;
  review?: string;
};

const PeopleCard = ({
  img,
  name,
  links = [],
  part,
  isOrganizer = false,
  introduce = '',
  review = '',
}: PeopleCardProps) => {
  return (
    <Box type="CONTENT" className="people-box" minHeight={270}>
      <S.Meta>
        <Image className="profile" alt="user image" src={img} />
        <section className="info">
          <section className="main-info">
            <h3 className="name">{name}</h3>
            <article className="links">
              {links.map((link) => (
                <Link type={link.type} url={link.url} key={link.type} />
              ))}
            </article>
          </section>
          <section className="sub-info">
            <p className="part">{part}</p>
            {isOrganizer && (
              <p>
                Organizer <OrganizerMark />
              </p>
            )}
          </section>
        </section>
      </S.Meta>
      <S.Introduce>{introduce}</S.Introduce>
      <S.Review>
        <h3>활동후기</h3>
        <p>{review}</p>
      </S.Review>
    </Box>
  );
};

export default PeopleCard;