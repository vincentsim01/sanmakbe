import { SetMetadata } from '@nestjs/common';
import type { Role } from '../prisma/generated/client';

export const IS_PUBLIC = 'isPublic';
export const REQUIRED_ROLES = 'requiredRoles';

export const Public = () => SetMetadata(IS_PUBLIC, true);
export const Roles = (...roles: Role[]) => SetMetadata(REQUIRED_ROLES, roles);
