import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Workspace } from 'src/engine/modules/workspace/workspace.entity';
import { UserService } from 'src/engine/modules/user/services/user.service';
import { UserWorkspaceService } from 'src/engine/modules/user-workspace/user-workspace.service';
import { User } from 'src/engine/modules/user/user.entity';

import { AuthResolver } from './auth.resolver';

import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: getRepositoryToken(Workspace, 'core'),
          useValue: {},
        },
        {
          provide: getRepositoryToken(User, 'core'),
          useValue: {},
        },
        {
          provide: AuthService,
          useValue: {},
        },
        {
          provide: TokenService,
          useValue: {},
        },
        {
          provide: UserService,
          useValue: {},
        },
        {
          provide: UserWorkspaceService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
