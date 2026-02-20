import { CharacterDirection } from '@yogiya/shared'

/**
 * 이전 위치 → 현재 위치 벡터로 8방향 캐릭터 방향을 계산합니다.
 * dx: 경도 차이 (동쪽 양수), dy: 위도 차이 (북쪽 양수)
 */
export function calcDirection(dx: number, dy: number): CharacterDirection {
  const angle = Math.atan2(dy, dx) * (180 / Math.PI) // -180 ~ 180

  // atan2: 동쪽=0, 북동=45, 북=90, 북서=135, 서=±180, 남서=-135, 남=-90, 남동=-45
  if (angle >= 67.5 && angle < 112.5) return 'north'
  if (angle >= 22.5 && angle < 67.5) return 'north-east'
  if (angle >= -22.5 && angle < 22.5) return 'east'
  if (angle >= -67.5 && angle < -22.5) return 'south-east'
  if (angle >= -112.5 && angle < -67.5) return 'south'
  if (angle >= -157.5 && angle < -112.5) return 'south-west'
  if (angle >= 112.5 && angle < 157.5) return 'north-west'
  return 'west' // angle >= 157.5 || angle < -157.5
}

/**
 * GPS heading(0=북, 시계방향 증가)을 8방향으로 변환합니다.
 * heading이 -1(유효하지 않음)이면 null을 반환합니다.
 */
export function headingToDirection(heading: number): CharacterDirection | null {
  if (heading < 0) return null

  // GPS heading: 0=북, 90=동, 180=남, 270=서
  // atan2 기준으로 변환: dy = cos(heading), dx = sin(heading)
  const rad = heading * (Math.PI / 180)
  const dx = Math.sin(rad)
  const dy = Math.cos(rad)
  return calcDirection(dx, dy)
}
