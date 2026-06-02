import { IconeInstagram } from "../icones/instagram";
import { IconeTwitch } from "../icones/twitch";
import { IconeTwitter } from "../icones/twitter";
import { IconeWhatsApp } from "../icones/whatsapp";
import { ItemListaInline } from "./itemLista";
import styled from "@emotion/styled";

export const ListaInline = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListaInlineRodape = () => {
  return (
    <ListaInline>
      <ItemListaInline>
        <a href="/" aria-label="Link para o WhatsApp">
          <IconeWhatsApp />
        </a>
      </ItemListaInline>
      <ItemListaInline>
        <a href="/" aria-label="Link para a Twitch">
          <IconeTwitch />
        </a>
      </ItemListaInline>
      <ItemListaInline>
        <a href="/" aria-label="Link para a Instagram">
          <IconeInstagram />
        </a>
      </ItemListaInline>
      <ItemListaInline>
        <a href="/" aria-label="Link para a Twitter">
          <IconeTwitter />
        </a>
      </ItemListaInline>
    </ListaInline>
  );
};
