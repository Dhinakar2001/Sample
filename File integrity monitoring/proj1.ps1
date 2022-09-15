


Write-Host " "
Write-Host "What would you like to do?"
Write-Host "A) Collect new Baseline?"
Write-Host "B) Begin monitoring Files with saved Baseline?"

Function Calculate-File-Hash($filepath) {
    $filehash = Get-FileHash -Path $filepath -Algorithm SHA512
    return $filehash
}
Calculate-File-Hash "E:\Documents\Test"

$response = Read-Host -Prompt "Please enter 'A' or 'B'"

Write-Host "User entered $($response)"