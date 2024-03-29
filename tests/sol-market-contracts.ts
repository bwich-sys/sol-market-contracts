import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolMarketContracts } from '../target/types/sol_market_contracts';

describe('sol-market-contracts', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolMarketContracts as Program<SolMarketContracts>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
