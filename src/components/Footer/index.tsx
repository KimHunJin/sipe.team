import { useLocation } from 'react-router-dom';
import { ReactComponent as Instagram } from '@/assets/instagram.svg';
import { ReactComponent as Github } from '@/assets/github.svg';
import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import { ReactComponent as Linkedin } from '@/assets/linkedin.svg';

import * as S from './styled';

const sns = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sipe_team/',
    icon: <Instagram />,
  },
  { name: 'Github', url: 'https://github.com/sipe-team', icon: <Github /> },
  { name: 'Youtube', url: '', icon: <Youtube /> },
  { name: 'Linkedin', url: '', icon: <Linkedin /> },
];

export default function Footer() {
  const { pathname } = useLocation();

  const color = pathname === '/' ? 'black' : 'gray';

  return (
    <S.Wrapper>
      <S.Group>
        <S.Copyright color={color}>All rights reserved ⓒ SIPE</S.Copyright>
        <S.Logos>
          {sns.map(
            (s) =>
              s.url !== '' && (
                <S.Icon
                  color={color}
                  onClick={() => {
                    window.open(s.url);
                  }}
                >
                  {s.icon}
                </S.Icon>
              )
          )}
        </S.Logos>
      </S.Group>
    </S.Wrapper>
  );
}
