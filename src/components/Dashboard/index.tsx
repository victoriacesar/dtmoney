import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable/index.tsx";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
