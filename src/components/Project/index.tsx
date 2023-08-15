import {

  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { FaGithub, FaShare } from "react-icons/fa";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  return (
    <>
      <Text as="h2" type="heading3" css={{ marginTop: "$3", marginBottom: "$3" }} color="grey1">
        Hamburgueria
      </Text>
      <ProjectStack>
        <Text type="body2">Linguagem:</Text>
        <ProjectStackTech>
          <Text color="pink1" type="body2">
            React
          </Text>
        </ProjectStackTech>
      </ProjectStack>
      <Text type="body1" color="grey2">
        Projeto para simular aplicativo de uma hamburgueria.
      </Text>

      <ProjectLinks>
        <ProjectLink
          target="_blank"
          href={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-nicoleantuness"
          }
        >
          <FaGithub /> Github Code
        </ProjectLink>
        <ProjectLink
          target="_blank"
          href={
            "https://hambrugeuria-kenzie-nicoleantuness-nicoleantuness.vercel.app"
          }
        >
          <FaShare /> Aplicação
        </ProjectLink>
      </ProjectLinks>

      <Text as="h2" type="heading3" css={{ marginTop: "$3", marginBottom: "$3" }} color="grey1">
        KenzieHub
      </Text>
      <ProjectStack>
        <Text type="body2">Linguagem:</Text>
        <ProjectStackTech>
          <Text color="pink1" type="body2">
            React
          </Text>
        </ProjectStackTech>
      </ProjectStack>
      <Text type="body1" color="grey2">
        Aplicação web para cadastrar tecnologias de algum usuário, contendo
        também sistema de login e cadastro.
      </Text>

      <ProjectLinks>
        <ProjectLink
          target="_blank"
          href={
            "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-nicoleantuness"
          }
        >
          <FaGithub /> Github Code
        </ProjectLink>
        <ProjectLink
          target="_blank"
          href={"https://kenziehub-api-nicoleantuness.vercel.app/"}
        >
          <FaShare /> Aplicação
        </ProjectLink>
      </ProjectLinks>

      <Text as="h2" type="heading3" css={{ marginTop: "$3", marginBottom: "$3" }} color="grey1">
        Arquivo CNAB
      </Text>
      <ProjectStack>
        <Text type="body2">Linguagem:</Text>
        <ProjectStackTech>
          <Text color="pink1" type="body2">
            Python
          </Text>
        </ProjectStackTech>
      </ProjectStack>
      <Text type="body1" color="grey2">
        É uma interface web que aceita upload do arquivo CNAB, normalizando os
        dados e armazenando em um banco de dados relacional e exibindo essas
        informações em tela.
      </Text>

      <ProjectLinks>
        <ProjectLink
          target="_blank"
          href={"https://github.com/nicoleantuness/arquivo-CNAB"}
        >
          <FaGithub /> Github Code
        </ProjectLink>
      </ProjectLinks>

      <Text as="h2" type="heading3" css={{ marginTop: "$3", marginBottom: "$3" }} color="grey1">
        Kenzie Buster
      </Text>
      <ProjectStack>
        <Text type="body2">Linguagem:</Text>
        <ProjectStackTech>
          <Text color="pink1" type="body2">
            Python
          </Text>
        </ProjectStackTech>
      </ProjectStack>
      <Text type="body1" color="grey2">
        Aplicação web que gerencia usuários, filmes e compras, incluindo
        autenticação e permissionamento de rotas para diferentes tipos de
        usuário.
      </Text>

      <ProjectLinks>
        <ProjectLink
          target="_blank"
          href={
            "https://github.com/Kenzie-Academy-Brasil-Developers/m5-kenzie--buster"
          }
        >
          <FaGithub /> Github Code
        </ProjectLink>
      </ProjectLinks>
    </>
  );
}