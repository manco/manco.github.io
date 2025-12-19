function calculate_pace_and_speed(distance_km, distance_m, h, min, sec) {
    // Calculate total distance in km
    const dist_total_km = distance_km + distance_m / 1000;

    // Calculate time in hours
    const time_total_sec = h * 3600 + min * 60 + sec;
    const time_total_h = time_total_sec / 3600;

    // Calculate speed in km/h
    const speed_km_per_h = Math.round(dist_total_km / time_total_h * 100) / 100;

    // Calculate pace (time per km) in seconds
    const pace_sec_per_km = Math.floor(time_total_sec / dist_total_km);
    
    const pace_minutes_part = Math.floor(pace_sec_per_km / 60);
    const pace_seconds_part = Math.round(pace_sec_per_km - Math.round(pace_minutes_part) * 60);

    return {
        pace_minutes: pace_minutes_part,
        pace_seconds: pace_seconds_part,
        speed: speed_km_per_h
    };
}