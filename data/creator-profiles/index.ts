import { miyamoto } from './miyamoto'
import { stephenKing } from './stephen-king'
import { pixar } from './pixar'
import { nolan } from './nolan'
import type { CreatorProfile, ProjectType } from '@/lib/types'

export const allProfiles: CreatorProfile[] = [
  miyamoto,
  stephenKing,
  pixar,
  nolan,
]

export function getProfilesForProjectType(projectType: ProjectType): CreatorProfile[] {
  return allProfiles.filter(p => p.projectTypes.includes(projectType))
}

export function getProfileById(id: string): CreatorProfile | undefined {
  return allProfiles.find(p => p.id === id)
}

export function getTopMatchesForProject(
  projectType: ProjectType,
  _genre?: string,
  limit = 4
): CreatorProfile[] {
  return getProfilesForProjectType(projectType).slice(0, limit)
}

export { miyamoto, stephenKing, pixar, nolan }
