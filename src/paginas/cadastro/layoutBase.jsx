import { Col, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import { Card } from "../../componentes/card";
import { CadastroUsuarioProvider } from "../../contexto/cadastroUsuario";

export const LayoutBaseCadastro = ({ children }) => {
  return (
    <CadastroUsuarioProvider>
      <Row justify="center" style={{ marginRight: "0" }}>
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "80px 0" }}
        >
          <Card>
            <Outlet />
            {children}
          </Card>
        </Col>
      </Row>
    </CadastroUsuarioProvider>
  );
};
